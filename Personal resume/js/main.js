new Vue({
  el: '#resume',
  data: {
  img : 'img/photo.jpg',
    name: '王艺',
    email: '邮箱：wy910@foxmail.com',
    phone: '联系方式：17562147472',
    github : '',
    github_name : '',
    job : '求职意向：web前端实习生',
    education_ba : '教育背景',
    education : [{
    school : ' 学校名称：山东华宇工学院',
    region : '地址：山东省德州市',
    time : '时间：2018-2021',
    course:'主修课程：java程序设计，java web网站设计，Android应用程序开发，计算机应用，计算机网络，数据库管理，PHP网站开发等。',
    professional : '专业：软件技术',
    degree : '学历：专科',
    }],
    honor : '荣誉奖励',
    honor_info : [
    {
    id : '1',
    honor : '2018-2019学年  总成绩班级排名第一  获得国家励志奖学金',
    
    },
    {
    id : '2',
    honor : '2019-2020学年  总成绩班级排名第二  获得国家励志奖学金',
  
    },
	{
	id : '3',
	honor : '2019年9月荣获全国高校创新英语挑战赛（专科生组）优秀奖',
	
	},
	{
	id : '4',
	honor : '2018-2020年自考青岛大学本科物流管理专业，并于2020年11月通过全部考试科目。',
	
	},
    ],
    practice : '校内实践',
    practice_info : [
    {
    id : '1',
    practice: '2018.10  作为国旗护卫队的成员参加运动会开幕式方队。',
 
    },
    {
    id : '2',
    practice : '2018.10-2019.10作为校自律委员会干部协助管理宿舍生活,期间组织最美宿舍的评选。',
  
    },
    {
    id : '3',
   practice : '2018.10-2019.10成为校学生会秘书处成员处理学生会事务。',
  
    }
    ],
    skills: '技能特长',
    skills_info : [
    {
    id : '1',
    skill: '熟练的使用Java语言进行面向对象程序设计，有良好的编程习惯，熟练的使用HTML、CSS、JS、Jquery、Ajax和JSON等。',
   
    },
    {
    id : '2',
  skill:' 主要学习的语言是Java语言，学习过的前端框架有Jquery，Bootstrap，vue等，学习过的数据库有MySql和SqlServer，使用的开发工具: HBuilderX ，版本管理工具 : git。 '
    },
    {
    id : '3',
   skill:'熟悉常用的关系型数据库产品（MySQL、Oracle），熟练的使用SQL和PL/SQL进行数据库编程。'
    }
    
    ],
    evaluation : '自我评价',
    evaluation_info : [
    {
    id : '1',
    evaluation: '喜欢编程，非常热爱这个行业，有较强的学习创新能力，能较快的掌握新技术，新工具和新方法。',

    },
    {
    id : '2',
     evaluation: '心态好，遇到困难不会被挫败，脾气好，能够和身边的人友好相处。',
  
    },
    {
    id : '3',
    evaluation : '做事沉稳，吃苦耐劳，可以适应较长的工作时间，适应较大的工作强度，有一定的抗压能力。',
 
    }
   
    ]
  }
})
