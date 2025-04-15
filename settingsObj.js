let settings = {
    theme: 'dark',
    notification: true,
}
settings.theme = 'red';
Object.freeze(settings)
settings.notification = false;

console.log(settings)

if(Object.isFrozen(settings)){
    console.log('This is in a frozen state!')
}else{
    settings.theme = 'blue'
}
