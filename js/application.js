/** @jsx React.DOM */
var GreetMessage = React.createClass ({
    render: function() {
        return (
            <h1>fullBackground.js <small className="hidden-xs hidden-sm">The easy way to a fullscreen background</ small></ h1>
            );
    }
});

var jsonUrl = './json/count.json';
var DownloadButton = React.createClass ({
    loadCountFromServer: function() {
        $.ajax({
            url: jsonUrl,
            dataType: 'json',
            cache: false,
            success: function(data) {              
                    this.setState({count: data.count});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(jsonUrl, status, err.toString());
            }.bind(this)
        });  
    }, 
    getInitialState: function() {
        return {count: 0};
    }, componentDidMount: function() {
        this.loadCountFromServer();
        setInterval(this.loadCountFromServer, 3000);  
        
    },
    clickDownload: function() {
        this.setState({count: this.state.count + 1}, function(){
            $.ajax({
               type: "POST",
               url: './update.php',
               async: false,
               data: {"count": this.state.count, date: new Date},
               success: function(data){
                  return true;
               },
               complete: function() {
               },
               error: function(xhr, textStatus, errorThrown) {
                   if(xhr.status == 412) {
                    return false;
                   }
                 console.log('ajax loading error...');
                 return false;
               }
            });
        });    
    },
    render: function() {
        return (
            <div>
                <p>
                <a 
                    className="btn btn-primary btn-lg" 
                    href="http://personberg.se/projekt/fullbackground/js/fullBackground.js" 
                    onClick={this.clickDownload} 
                    role="button">Download source</a>
                </p>
                <DisplayCount count={this.state.count} /> 
            </div>
        );
    }
});



var DisplayCount = React.createClass({
    render: function() {
        return (
            <div><small>Downloads: <b>{this.props.count}</b></small></div>
        );
    }
});

var Demo = React.createClass ({
    
    toggleDemo: function(event) {
            var icon =  $('.demo button span.glyphicon');
            var button = $('.demo button');
        
            $('.allcontent div:not(.demo)').toggle();
            if ($('.content').is(':visible')) {
                button.text('See it in action').append(icon); 
                icon.removeClass('glyphicon-resize-small').addClass('glyphicon-resize-full');
            } else {
                button.text('Exit demo').append(icon); 
                icon.removeClass('glyphicon-resize-full').addClass('glyphicon-resize-small');
            }
            return true;
    },
    render: function() {
        this.toggleDemo();
        return (
            <div className="demo">
                <button type="button" onClick={this.toggleDemo}>See it in action
                    <span className="glyphicon glyphicon-resize-full"></span>
                </button>
            </div>
        );
    }
});

var root = <div className="allcontent"><Demo /><ContentJumbotron /><Content /><Footer /></div>;

React.render(root, document.getElementById('mount-point'));
