var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
const faqDisc = document.getElementsByClassName('faqDisc');

const toggleCollapse = (index , ele) => {
    faqDisc[index].classList.toggle('hidden')
    ele.getElementsByClassName('close')[0].classList.toggle('hidden')
    ele.getElementsByClassName('open')[0].classList.toggle('hidden')
}

const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden')
}

const dropdownCollapse = () => {
    const desktopCollapse = document.getElementById('desktopCollapse');
    const desktopCollapse2 = document.getElementById('desktopCollapse2');
    desktopCollapse.classList.toggle('lg:block');
    desktopCollapse2.classList.toggle('hidden');
}

}