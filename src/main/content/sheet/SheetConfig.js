import Sheet from './Sheet';

export const SheetConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/sheet/:id',
            component: Sheet
        }
    ]
};
