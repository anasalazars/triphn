// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'auto', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/listas/',
    	url: 'listas.html',
    	name: 'listas',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
		{
		path: '/accordions/',
    	url: 'accordions.html',
    	name: 'accordions',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/destinos/',
    	url: 'destinos.html',
    	name: 'destinos',
  		},
		{
		path: '/infopromo/',
    	url: 'infopromo.html',
    	name: 'infopromo',
  		},
		{
		path: '/sobreapli/',
    	url: 'sobreapli.html',
    	name: 'sobreapli',
  		},
		{
		path: '/registro/',
    	url: 'registro.html',
    	name: 'registro',
  		},
		{
		path: '/hoteles/',
    	url: 'hoteles.html',
    	name: 'hoteles',
  		},
		{
		path: '/snorkeling/',
    	url: 'snorkeling.html',
    	name: 'snorkeling',
  		},
		{
		path: '/ibagari/',
    	url: 'ibagari.html',
    	name: 'ibagari',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">favorite</i>',
  title: '¡Bienvenido!',
  subtitle: 'Triphn, tu mejor opción de viajes.',
  text: '',
  closeButton: true,
  closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$(window).on('load', function () {
  notificationWelcome.open();
});




 

