一.这个项目目前存在的问题



1.sidebar的hover伪类突然就不行了，连cursor都变了。
2.navbar里面的搜索框出现的字符。
3.modal模态框出现的位置不能正居中。
4.navbar里的注册登录按钮hover时的状态。(没有办法做到和navbar一样高)
5.modal模态框里的Input在输入完字符的时候能否依然保持蓝色的状态。
6.为什么有时候把控制台打开网页的样式会不一样。
7.modal模态框匹配的控制器能否处理数据，还是一定要传递到外层的控制器里面才能做数据处理？
8.为什么要在$resource里面定义一个put方法。

二.这个项目的数据库结构

user{
uid,phone,password,name,[commodity]
}
commodity{
{user},uid,cid,[img],title,price,chaffer,address,time,description.[remarks]
}
remarks{
uid,cid,time,content,{user}
}



三.做这个项目的收获。

1.怎么在一个width确定但是content不确定的控件中使padding-left等于padding-right  :  text-align: center;

2.在一个modal打开的模态框里面是可以直接引用外部控制器里面的function($scope.test)的，前提是modal控制器里面没有引入$scope(因为引入了以后会造成语意不清).


四.做短信验证码的要求.

最好是免费的。
得是node.js端的demo.
