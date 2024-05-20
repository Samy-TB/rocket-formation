import { CollectionConfig } from "payload/types";

const GroceryList: CollectionConfig={
    slug: 'grocery-list',
    access:{
        read: () => true,
    },
    fields:[
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'items',
            label: 'Items',
            type: 'array',
            labels: {
                singular: 'Item',
                plural: 'Items',
            },
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'quantity',
                    label: 'Quantity',
                    type: 'number',
                    required: true,
                },
            ],
        },
    ]
}

export default GroceryList