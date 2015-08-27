(function () {
    var account = new Accounts();
    account.set({
        "nickname": "test",
        "motto": "good good study"
    });
    var login = new Login({
        collection: account
    });
    var articles = new ArticleCollection();
    articles.set({
        "date":"2015.8",
        "title":"我的天",
        "content":"蓝蓝的天上白云飘，我的花儿从中:-笑"
    });
    var user = new User({
        collection: account
    });
    var write = new Write({
        collection: articles
    });
    var popup = new Popup({
        collection: account
    });
    var base = new Base();
}());