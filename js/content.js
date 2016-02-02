/** @jsx React.DOM */
//<img src={'./img/logo.png'} className="logo"/>
var ContentJumbotron = React.createClass ({
    render: function() {
        return (
        <div className="jumbotron container">
          <h1>fullBackground.js</h1>
          <p>The easy way to a fullscreen background on your websites</p>
          <DownloadButton />
        </div>
        );
    }
});

var ContentFeature = React.createClass ({
    render: function() {
        return (
            <div className="center-block">
                <div className="col-lg-4 col-sm-12 feature">
                    <h1><span className="glyphicon glyphicon-heart-empty"></span></h1>
                    <h4>Smooth animations</h4>
           <p>The transition between the images are made with css3 and easy to customize</p>
                </div>
                    <div className="col-lg-4 col-sm-12 feature">
                    <h1><span className="glyphicon glyphicon-random"></span></h1>
                    <h4>Random or fixed order</h4>
                    <p>Change the order and behavior with a true/false Boolean-variable. </p>
                </div>
                    <div className="col-lg-4 col-sm-12 feature">
                    <h1><span className="glyphicon glyphicon-refresh"></span></h1>
                    <h4>Minimal loading time</h4>
            <p>All the images are loading on first load witch makes the experince more responsive</p>
                </div>
            </div>
               );
    }
});

var ContentUsage = React.createClass({
    render: function() {
    return (
            <div>
                <h3>Basic Usage</h3>
                <p><b>1. Include javascript-file</b></p>
                <pre >
                        &lt;script src="js/fullBackground.js"&gt;&lt;/script&gt;
                </pre>
                <p><b>2. Specify image-files and thier destination from root-folder</b>
                <p>The name of the images should be positioned in a array</p></p>
                <pre>
                        var imageLocation = "./img/";
                </pre>
                <pre>
                    var backgrounds = ["1.jpeg", "2.jpeg", "3.jpeg"];
                </pre>
                <p><b>3. Include this on the page to start the plug-in</b></p>
                <pre>
                        &lt;script&gt;
                        fullBackground();
                        &lt;/script&gt;
                </pre>
            </div>
        );
    }
});

var ContentSettings = React.createClass ({
    render: function() {
    return (
        <div>
            <h3>Settings</h3>
            <pre>
                <p> 
                    var isRandom = true;
                    <comment> Randomize next photo </comment>
                </p>
                <p> 
                    var animation = true;
                    <comment> Animate background change </comment>
                </p> 
                <p> 
                    var imageLocation = "./img/";
                    <comment> Location to photos from root folder </comment>
                </p> 
                <p> 
                    var changeByInterval = true;
                    <comment> Change photo by button or timeinterval </comment>
                </p> 
                <p> 
                    var timer = 7000;
                    <comment> Time between each photo </comment>
                </p> 
            </pre>
        </div>
        );
    }
});

var Content = React.createClass ({
    render: function() {
        return (
            <div className="content">
                <div className="container">
                    <ContentUsage />
                    <ContentSettings/>
                    <h3>Credits</h3>
                    <p>Photos by Ylva Sonberg. Read the blog and follow her daily storys here <a href="https://ysonberg.wordpress.com">https://ysonberg.wordpress.com</a></p>
                </div>
            </div>
        );
    }
});

var Footer = React.createClass ({
    render: function() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="about center-block container">   
                        <h3>Created by Per Sonberg <br/><br/> <small>Studing digital design & innovation at the university of Halmstad </small></h3>
                        <a href="http://personberg.se">
                            <p>Visit my portfolio</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});