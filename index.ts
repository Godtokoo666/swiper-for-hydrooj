import { db, PERM, Handler, Context,Types,param,ValidationError,} from 'hydrooj';

const coll = db.collection('swiper');

async function getSwiper(domainId) {
    const data = await coll.findOne({ domainId: domainId });
    if (!data) return [null, null];
    else{
        const sdocs = await data['config'];
        const ssdict = {
            loop: data['loop'],
            autoplay: data['autoplay'],
            interval: data['interval'],
        };
        return [sdocs, ssdict];
    }
}

async function setSwiper(domainId, sdocs, ssdict) {
    await coll.updateOne({ domainId: domainId }, {
        $set: { loop: ssdict.loop, autoplay: ssdict.autoplay, interval: ssdict.interval,config: sdocs },
    }, { upsert: true });
}
class DomainSwiperHandler extends Handler {
    async prepare({ domainId }) {
        this.checkPerm(PERM.PERM_EDIT_DOMAIN);
        this.domain = domainId;
    }
    async get() {
        const [sdocs, ssdict] = await getSwiper(this.domain);
        if (!sdocs) {
            this.response.template = 'domain_swiper.html';
            this.response.body = {initialize:true, domainId: this.domain, ssdict, value: '' };
        }
        else {
            this.response.template = 'domain_swiper.html';
            let value=JSON.stringify(sdocs, null, 2)
            this.response.body = { domainId: this.domain, ssdict, value};
        }
    }
    
    @param('loop', Types.Boolean)
    @param('autoplay', Types.Boolean)
    @param('interval', Types.Int)
    @param('value', Types.Content)
    async post(domainId: String,loop: Boolean, autoplay: Boolean, interval: number, value: string) {
        let sdocs=[];
        try{
            sdocs=JSON.parse(value);
        }catch(e){
            throw new ValidationError('config', null, e.message);
        }
        await setSwiper(domainId, sdocs, { loop, autoplay, interval });
        this.response.redirect = this.url('domain_swiper', { domainId: domainId });
    }
}

export async function apply(ctx: Context) {
    ctx.withHandlerClass('HomeHandler', (HomeHandler) => {
        HomeHandler.prototype.getSwiper = getSwiper;
    });
    ctx.injectUI('DomainManage', 'domain_swiper',{family: 'Properties', icon: 'info' });
    ctx.Route('domain_swiper','/domain/swiper', DomainSwiperHandler,);
    ctx.i18n.load('zh',{
        'swiper': '轮播图',
        'initialize': '初始化',
        'domain_swiper': '轮播图配置',
        'swiper_loop': '循环播放',
        'swiper_autoplay': '自动播放',
        'swiper_interval': '播放间隔',
        'swiper_config': '详细配置',
    });
    ctx.i18n.load('en',{
        'swiper': 'Swiper',
        'initialize': 'Initialize',
        'domain_swiper': 'Swiper Configuration',
        'swiper_loop': 'Loop',
        'swiper_autoplay': 'Autoplay',
        'swiper_interval': 'Interval',
        'swiper_config': 'Swiper Config',
    });
}
