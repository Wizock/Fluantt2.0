from backend import app

if __name__=="__main__":
    
    app.run(ssl_context='adhoc',port = 5000,debug=True)
