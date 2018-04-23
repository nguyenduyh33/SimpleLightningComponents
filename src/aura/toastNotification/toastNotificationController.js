({
    doInit : function(component, event, helper) {
        console.log('doInit');
    },
    closeNotification : function(component, event, helper) {
        component.destroy();
    },
    handleNotification : function(component, event, helper) {
        component.set('v.type', event.getParam('type'));
        component.set('v.message', event.getParam('message'));
        component.set('v.details', event.getParam('details'));
    }
})