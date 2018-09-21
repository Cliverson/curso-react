

export function selectTab(tabId ) {
    console.log(tabId)
    return {
        type:'TAB_SELECTED',
        payload: tabId
    }
    
}

export function showTabs(...tabsId) {
    const tabsToShow = {}
    tabsId.forEach(element => (
        tabsToShow[element] = true
    ));
  
    return {
        type:'TAB_SHOWED',
        payload: tabsToShow
    }
}