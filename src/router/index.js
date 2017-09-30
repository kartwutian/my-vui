import Vue from 'vue'
import Router from 'vue-router'

// 按需加载
const CitySelect = r => require.ensure([], () => r(require('@/components/cityselect')), 'chunkname1');
import Index from '@/components/index';
import Button from '@/components/button';
import Dialog from '@/components/dialog';
import Cell from '@/components/cell';
import Grids from '@/components/grids';
import Icons from '@/components/icons';
import List from '@/components/list';
import ListTheme from '@/components/list.theme';
import ListInfinitescroll from '@/components/list.infinitescroll';
import ListPullRefresh from '@/components/list.pullrefresh';
import Badge from '@/components/badge';
import AsideBar from '@/components/asidebar';
import TabBar from '@/components/tabbar';
import NavBar from '@/components/navbar';
import Tabs from '@/components/tabs';
import Tab from '@/components/tab';
import ScrollTab from '@/components/scrolltab';
import ActionSheet from '@/components/actionsheet';
import SendCode from '@/components/sendcode';
import ProgressBar from '@/components/progressbar';
import KeyBoard from '@/components/keyboard';
import Slider from '@/components/slider';
import Spinner from '@/components/spinner';
// import CitySelect from '@/components/cityselect';
import CountDown from '@/components/countdown';
import Rate from '@/components/rate';
import Popup from '@/components/popup';
import CountUp from '@/components/countup';
import RollNotice from '@/components/rollnotice';
import Input from '@/components/input';
import FlexBox from '@/components/flexbox';
import CR from '@/components/cr';
import Switch from '@/components/switch';
import Radio from '@/components/radio';
import CheckBox from '@/components/checkbox';
import BackTop from '@/components/backtop';
import Accordion from '@/components/accordion';
import DateTime from '@/components/datetime';
import LightBox from '@/components/lightbox';
import TimeLine from '@/components/timeline';
import Step from '@/components/step';
import CheckList from '@/components/checklist';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/button', name: 'button', component: Button},
    {path: '/dialog', name: 'dialog', component: Dialog},
    {path: '/cell', name: 'cell', component: Cell},
    {path: '/grids', name: 'grids', component: Grids},
    {path: '/icons', name: 'icons', component: Icons},
    {path: '/list', name: 'list', component: List},
    {path: '/list.theme/:id', name: 'list.theme/:id', component: ListTheme},
    {path: '/list.infinitescroll', name: 'list.infinitescroll', component: ListInfinitescroll},
    {path: '/list.pullrefresh', name: 'list.pullrefresh', component: ListPullRefresh},
    {path: '/badge', name: 'badge', component: Badge},
    {path: '/asidebar', name: 'asidebar', component: AsideBar},
    {path: '/tabbar', name: 'tabbar', component: TabBar},
    {path: '/navbar', name: 'navbar', component: NavBar},
    {path: '/tabs', name: 'tabs', component: Tabs},
    {path: '/tab', name: 'tab', component: Tab},
    {path: '/scrolltab', name: 'scrolltab', component: ScrollTab},
    {path: '/actionsheet', name: 'actionsheet', component: ActionSheet},
    {path: '/sendcode', name: 'sendcode', component: SendCode},
    {path: '/progressbar', name: 'progressbar', component: ProgressBar},
    {path: '/keyboard', name: 'keyboard', component: KeyBoard},
    {path: '/slider', name: 'slider', component: Slider},
    {path: '/spinner', name: 'spinner', component: Spinner},
    {path: '/cityselect', name: 'cityselect', component: CitySelect},
    {path: '/countdown', name: 'countdown', component: CountDown},
    {path: '/rate', name: 'rate', component: Rate},
    {path: '/popup', name: 'popup', component: Popup},
    {path: '/countup', name: 'countup', component: CountUp},
    {path: '/rollnotice', name: 'rollnotice', component: RollNotice},
    {path: '/input', name: 'input', component: Input},
    {path: '/flexbox', name: 'flexbox', component: FlexBox},
    {path: '/cr', name: 'C&R', component: CR},
    {path: '/switch', name: 'switch', component: Switch},
    {path: '/radio', name: 'radio', component: Radio},
    {path: '/checkbox', name: 'checkbox', component: CheckBox},
    {path: '/backtop', name: 'backtop', component: BackTop},
    {path: '/accordion', name: 'accordion', component: Accordion},
    {path: '/datetime', name: 'datetime', component: DateTime},
    {path: '/lightbox', name: 'lightbox', component: LightBox},
    {path: '/timeline', name: 'timeline', component: TimeLine},
    {path: '/step', name: 'step', component: Step},
    {path: '/checklist', name: 'checklist', component: CheckList},
  ]
})
