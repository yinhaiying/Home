# MySQL入门之库表操作
![思维导图](https://imgkr.cn-bj.ufileos.com/28827387-1a3b-4041-9804-b1071d3ee24c.png)
## 连接数据库
MySQL下载之后，我们将它添加到全局path中，这样我们就可以在任何地方使用MySQL的命令了。添加方式如下：电脑 > 属性 > 高级(环境变量) > Path(新建) > 将MySQL的bin文件添加到表格中即可。
![path](https://imgkr.cn-bj.ufileos.com/7d8d4bdf-0b25-412f-bb60-dfdab7c62b68.png)
添加了全局路径之后我们就可以使用MySQL指令连接数据库，最简单的连接方式就是：
```sql
mysql -uroot -p
```
-u表示username用户名，通常默认为root;-p表示password用户密码，默认为空。在这里直接enter之后会提示你输入密码，输入为空即可，出现如下页面则表示连接成功。
![连接数据库](https://imgkr.cn-bj.ufileos.com/6f4cffe2-00c8-4f8e-9592-646b35c15c20.png)
## SQL语句的分类
在学习数据库的各种操作之前，我们先了解一下常见的SQL语句分类，不同的分类有不同的关键字，同样的创建和删除针对不同的对象比如库和字段记录就具有不同的关键字，通过了解这些分类，可以方便我们记忆和使用。
SQL语句主要可以分为以下三类：
1. DDL(Data Definition Languages)语句：数据定义语句，这些语句定义了不同的数据段、数据库、表、列和索引等数据库对象。常用的语句关键字主要包括：create、drop和alter等。更加通俗地理解：它主要操作大的对象，比如数据库，数据表等。
2. DML(Data manipulation Language)语句：数据操纵语句，用于添加、删除、更新和查询数据库记录，并检查数据完整性。常用的语句关键字主要包括insert、delete、update和select等。更加通俗地理解：它就是操作小的数据（主要针对的是数据），比如数据表中的一条数据。
3. DCL(Data Control Language)语句：数据控制语句，用于控制不同数据段直接的许可和访问级别的语句。这些语句定义了数据库、表、字段和用户的访问权限和安全级别。主要的语句关键字包括grant、revoke等。

从上面的分类可以看出，我们今天要讲的库表的操作属于数据定义语句(DDL)，使用的主要关键字就是`create`,`drop`和`alter`。
## 数据库的操作
数据库的创建查看删除操作语法：
```sql
创建：create database dbname;
查看数据库:show databases;
进入数据库:use database;
删除数据库：drop database;
```
从上面我们可以看出，数据库的创建和删除操作使用的关键字就是create和drop，这跟我们在上面说的DDL语句关键字一致。这些语句的操作过程如下：
![数据库的操作](https://imgkr.cn-bj.ufileos.com/10472508-9d2f-4e77-8f14-125133969e25.png)
## 数据表的操作
数据表的操作同样涉及到增删改查。
## 创建数据表
在创建一个数据库之后，对于关系型数据库，接下来我们需要定义一个表，表的创建语法如下：
```
create table tablename(column_name1 columntype,column_name2 columntype);
```
查看具体的使用：
![表的创建](https://imgkr.cn-bj.ufileos.com/9f7ddec6-747a-48b6-a809-bf940fe2b47e.png)
在创建了表之后，我们可以使用`desc tablename`来查看表的结构，具有哪些字段，设置了哪些属性。
## 删除数据表
```sql
drop table tablename
```
删除数据表我们同样使用关键字drop。
## 修改表
表的修改主要包括两个方面，一方面是修改表本身，包括修改表的名字，修改表的字符集等信息,通常我们很少去修改字符集。
### 修改表的名字
修改表名我们使用`rename`关键字，具体的语法如下：
```sql
rename table 旧表名 to 新表名
```
![重命名表](https://imgkr.cn-bj.ufileos.com/4294370b-de49-4ae6-8ac5-ad8c8cb4c738.png)
上图中，我们将表的名字从student修改为person。查看数据表可以发现修改成功。

### 修改表中字段
修改表中的字段主要包括：新增字段，删除字段，修改字段数据类型和重命名字段等。修改字段主要使用关键字`alter`。
#### 新增字段
我们在创建一个数据表的时候，可能不会把所有字段都写全，这时候我们就需要向表中增加字段了。新增字段的语法如下：
```sql
alter table 表名 add column 字段名称 字段类型 [first|after字段名称]
```
![](https://imgkr.cn-bj.ufileos.com/08231a4c-4184-4843-9adc-8b6c91d4b8c3.png)
上图中，我们创建的student表只有name,age和sex三个字段。接下来我们通过alter table student add column id int(10);添加了一个id字段。接下来我们在查看发现表中已经新增了一列id字段了。
#### 删除字段
删除字段的语法如下：
```sql
alter table 表名 drop 字段名;
```
![](https://imgkr.cn-bj.ufileos.com/36b51ac3-6c30-48a9-89aa-8091088e8cde.png)
从图中我们可以看出，通过alter table student drop id我们删除了id字段。

#### 修改字段数据类型
```sql
alter table 表名 modify 字段名 修改后的数据类型
```
![](https://imgkr.cn-bj.ufileos.com/e8edff4d-1c17-4ea5-a3c4-62fa54c40748.png)
修改表中字段类型通过modify关键字。

#### 重命名字段
有些时候我们需要修改字段的名字，我们当然可以先删除这个字段然后重新添加一个字段，但是这涉及到数据的迁移，因此这种方法并不可取。SQL同样提供了语法来实现这个功能，语法如下：
```sql
alter table 表名 change 原来的字段名 修改后的字段名 修改后的字段数据类型
```
![](https://imgkr.cn-bj.ufileos.com/47f74afd-a0d1-4351-8ab1-95aa13040a3d.png)
上图中，我们通过alter table student change gender sex varchar(2)语句，将gender字段修改为了sex字段。


## 总结
本篇文章中，我们主要介绍了如下内容：<br/>
1. 数据库的连接
2. 数据库的创建、查看和删除等操作
3. 数据表的操作：数据表的创建，查看，删除和修改操作。其中修改操作主要包括修改表本身和修改表中字段。
4. 数据库的库和表操作使用到的关键字主要包括：`create`,`drop`,`alter`等















