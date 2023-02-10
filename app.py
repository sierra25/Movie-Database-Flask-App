import Flask, render_template

#from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
   # return flask.render_template('index.html')
   return render_template('index.html');

if __name__ == '__main__':
    app.run(debug=False)
