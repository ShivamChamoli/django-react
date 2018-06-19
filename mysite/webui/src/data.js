window.App = {
    globalPartnersData : {
        "partnerDetails": {
            "sections": "3",
            "partnerCount":"9",
            "categories": {
                "0": "Networks",
                "1": "Databases",
                "2": "Security"
            },
            "partners": {
                "1": {
                "id": "0",
                "name": "nuoDB",
                "type": "1"
                },
                "2": {
                "id": "1",
                "name": "sysdig",
                "type": "2"
                },
                "3": {
                "id": "2",
                "name": "aruba",
                "type": "0"
                },
                "4": {
                "id": "3",
                "name": "scyllaDB",
                "type": "1"
                },
                "5": {
                "id": "4",
                "name": "random",
                "type": "1"
                },
                "6": {
                    "id": "5",
                    "name": "Avi Networks",
                    "type": "0"
                },
                "7": {
                    "id": "6",
                    "name": "HAProxy",
                    "type": "0"
                },
                "8": {
                    "id": "5",
                    "name": "DB",
                    "type": "1"
                },
                "9": {
                    "id": "5",
                    "name": "aqua",
                    "type": "2"
                }
            }
        }
    },
    globalSidemenuOptions : [
        {divider: true, label: 'Main navigation', value: 'main-nav'},
        {label: 'item 1', value: 'item1', icon: 'fa-search',
        children: [
        {label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
        children: [
            {label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor'},
            {label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart'}]},
        {label: 'item 1.2', value: 'item1.2'}]},
        {label: 'item 2', value: 'item2', icon: 'fa-automobile',
        children: [
        {label: 'item 2.1', value: 'item2.1',
        children: [
            {label: 'item 2.1.1', value: 'item2.1.1'},
            {label: 'item 2.1.2', value: 'item2.1.2'}]},
        {label: 'item 2.2', value: 'item2.2'}]},
        {divider: true, label: 'Motors', value: 'motors-nav'},
        {label: 'item 3', value: 'item3', icon: 'fa-beer'}
    ],
    stringConstants : {
        'alphabetically':'Alphabetically (a-z)'
    },
    urlConstants : {
        'editURL':'/edit'
    }
}