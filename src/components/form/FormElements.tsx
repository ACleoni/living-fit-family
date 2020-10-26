type elementProps = {
    type: string,
    name: string,
    dataValidate: string
}

export default [
    {
        type: 'input',
        name: 'Full Name',
        dataValidate: 'Name is required'
    },
    {
        type: 'input',
        name: 'Phone',
        dataValidate: 'Phone number is required'
    },
    {
        type: 'input',
        name: 'Email',
        dataValidate: 'Email address is required'
    },
    {
        type: 'input',
        name: 'Instagram',
        dataValidate: 'Instagram profile name is require: @livingfitfamily'
    },
    {
        type: 'textarea',
        name: 'Message',
        dataValidate: 'Message is required'
    },
]