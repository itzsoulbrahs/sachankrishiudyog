const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
});

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Sachan Krishi Yantra Udyog' });
});

app.get('/index.php', (req, res) => res.redirect('/'));

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Page || Sachan Krishi Yantra Udyog' });
});
app.get('/about.php', (req, res) => res.redirect('/about'));

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Page || Sachan Krishi Yantra Udyog' });
});
app.get('/contact.php', (req, res) => res.redirect('/contact'));

app.get('/gallery', (req, res) => {
    res.render('pages/gallery', { title: 'Sachan Krishi Yantra Udyog | Gallery' });
});
app.get('/gallery.php', (req, res) => res.redirect('/gallery'));

app.get('/video', (req, res) => {
    res.render('pages/video', { title: 'Sachan Krishi Yantra Udyog | Video' });
});
app.get('/video.php', (req, res) => res.redirect('/video'));

app.get('/metal-tomato-plough-manufacturer-in-chattisgarh', (req, res) => {
    res.render('pages/products/metal-tomato-plough', { 
        title: 'Metal Tomato Plough Manufacturer In Chattisgarh',
        description: 'we "Sachan Krishi Yantra Udyog" are the leading Manufacturer, Wholesaler of a wide range of Metal Tomato Plough Manufacturer In Chattisgarh.'
    });
});
app.get('/metal-tomato-plough-manufacturer-in-chattisgarh.php', (req, res) => res.redirect('/metal-tomato-plough-manufacturer-in-chattisgarh'));

app.get('/feet-sachan-rotavator-manufacturer-in-bhilai', (req, res) => {
    res.render('pages/products/feet-sachan-rotavator', { 
        title: '6 Feet Sachan Rotavator Manufacturer In Bhilai',
        description: 'we "Sachan Krishi Yantra Udyog" are the leading Manufacturer of 6 Feet Sachan Rotavator.'
    });
});
app.get('/feet-sachan-rotavator-manufacturer-in-bhilai.php', (req, res) => res.redirect('/feet-sachan-rotavator-manufacturer-in-bhilai'));

app.get('/rotavator-agriculture-equipment-wholesaler-in-chattisgarh', (req, res) => {
    res.render('pages/products/rotavator-agriculture-equipment', { 
        title: 'Rotavator Agriculture Equipment Wholesaler In Chattisgarh',
        description: 'Leading wholesaler of Rotavator Agriculture Equipment in Chattisgarh.'
    });
});
app.get('/rotavator-agriculture-equipment-wholesaler-in-chattisgarh.php', (req, res) => res.redirect('/rotavator-agriculture-equipment-wholesaler-in-chattisgarh'));

app.get('/multi-speed-rotavator-manufacturer-in-raipur', (req, res) => {
    res.render('pages/products/multi-speed-rotavator', { 
        title: 'Multi Speed Rotavator Manufacturer In Raipur',
        description: 'Leading manufacturer of Multi Speed Rotavator in Raipur.'
    });
});
app.get('/multi-speed-rotavator-manufacturer-in-raipur.php', (req, res) => res.redirect('/multi-speed-rotavator-manufacturer-in-raipur'));

app.get('/tractor-rotavator-wholesaler-in-raipur', (req, res) => {
    res.render('pages/products/tractor-rotavator', { 
        title: '7 Feet Tractor Operated Rotavator Wholesaler In Raipur',
        description: 'Leading wholesaler of 7 Feet Tractor Operated Rotavator in Raipur.'
    });
});
app.get('/tractor-rotavator-wholesaler-in-raipur.php', (req, res) => res.redirect('/tractor-rotavator-wholesaler-in-raipur'));

app.get('/tractor-cage-wheel-manufcaturer-in-chattisgarh', (req, res) => {
    res.render('pages/products/tractor-cage-wheel', { 
        title: 'Tractor Cage Wheel Manufacturer In Chattisgarh',
        description: 'Leading manufacturer of Tractor Cage Wheel in Chattisgarh.'
    });
});
app.get('/tractor-cage-wheel-manufcaturer-in-chattisgarh.php', (req, res) => res.redirect('/tractor-cage-wheel-manufcaturer-in-chattisgarh'));

app.get('/rotavator-manufacturer-in-chattisgarh', (req, res) => {
    res.render('pages/products/rotavator-chattisgarh', { 
        title: 'Rotavator Manufacturer In Chattisgarh',
        description: 'Leading manufacturer of Rotavator in Chattisgarh.'
    });
});
app.get('/rotavator-manufacturer-in-chattisgarh.php', (req, res) => res.redirect('/rotavator-manufacturer-in-chattisgarh'));

app.get('/rotavator-manufacturer-in-bilaspur', (req, res) => {
    res.render('pages/products/rotavator-bilaspur', { 
        title: 'Rotavator Manufacturer In Bilaspur',
        description: 'Leading manufacturer of Rotavator in Bilaspur.'
    });
});
app.get('/rotavator-manufacturer-in-bilaspur.php', (req, res) => res.redirect('/rotavator-manufacturer-in-bilaspur'));

app.post('/contact', (req, res) => {
    const { name, email, address, phone } = req.body;
    console.log('Contact form submission:', { name, email, address, phone });
    res.render('pages/contact', { 
        title: 'Contact Page || Sachan Krishi Yantra Udyog',
        success: true 
    });
});

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nAllow: /');
});

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/sitemap.xml'));
});

app.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
