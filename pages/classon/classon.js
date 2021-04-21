// pages/classon/classon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,    //id为''时为不选中
    index: '',
    list: [
      {
        id: 1,
        title: '茶器系列',
        child:[ 
           {  
              gd_id:11,
              Myimgurl:"../../images/c1.png",
              proname:'一卷清荷套装',
              proprice:'100'
           },
           {
            gd_id:12,
            Myimgurl:"../../images/c2.png",
            proname:'一卷清荷套装',
            proprice:'1620'
         },
         {
          gd_id:13,
          Myimgurl:"../../images/c3.png",
          proname:'一卷清荷套装',
          proprice:'1620'
         },
         {
          gd_id:14,
          Myimgurl:"../../images/c4.png",
          proname:'一卷清荷套装',
          proprice:'1620'
        },
       {
          gd_id:15,
          Myimgurl:"../../images/c5.png",
          proname:'一卷清荷套装',
          proprice:'1620'
       },
       {
          gd_id:16,
          Myimgurl:"../../images/c6.png",
          proname:'一卷清荷套装',
          proprice:'1620'
       },
       {
          gd_id:17,
          Myimgurl:"../../images/c7.png",
          proname:'一卷清荷套装',
          proprice:'1620'
       },
       {
          gd_id:18,
          Myimgurl:"../../images/c8.png",
          proname:'一卷清荷套装',
          proprice:'1620'
       }
        ]
      },


      {
        id: 2,
        title: '花器系列',
        child:[ 
          {
             Myimgurl:"../../images/ff1.png",
             proname:'一卷清荷套装',
             proprice:'200'
          },
          {
           Myimgurl:"../../images/c7.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c2.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c1.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
     },
     
      {
        id: 3,
        title: '香器系列',
        child:[ 
          {
             Myimgurl:"../../images/c1.png",
             proname:'一卷清荷套装',
             proprice:'300'
          },
          {
           Myimgurl:"../../images/c2.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c7.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c8.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id: 4,
        title: '禅空间',
        child:[ 
          {
             Myimgurl:"../../images/c8.png",
             proname:'一卷清荷套装',
             proprice:'400'
          },
          {
           Myimgurl:"../../images/c7.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c2.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c1.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id: 5,
        title: '酒具系列',
        child:[ 
          {
             Myimgurl:"../../images/c1.png",
             proname:'一卷清荷套装',
             proprice:'500'
          },
          {
           Myimgurl:"../../images/c2.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c7.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c8.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id: 6,
        title: '礼器',
        child:[ 
          {
             Myimgurl:"../../images/c8.png",
             proname:'一卷清荷套装',
             proprice:'600'
          },
          {
           Myimgurl:"../../images/c7.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c2.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c1.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id: 7,
        title: '礼物推荐',
        child:[ 
          {
             Myimgurl:"../../images/c1.png",
             proname:'一卷清荷套装',
             proprice:'700'
          },
          {
           Myimgurl:"../../images/c2.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c7.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c8.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id: 8,
        title: '生活美学',
        child:[ 
          {
             Myimgurl:"../../images/c8.png",
             proname:'一卷清荷套装',
             proprice:'800'
          },
          {
           Myimgurl:"../../images/c7.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c2.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c1.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      },
      {
        id:9,
        title: '观念配饰',
        child:[ 
          {
             Myimgurl:"../../images/c1.png",
             proname:'一卷清荷套装',
             proprice:'900'
          },
          {
           Myimgurl:"../../images/c2.png",
           proname:'一卷清荷套装',
           proprice:'1620'
        },
        {
         Myimgurl:"../../images/c3.png",
         proname:'一卷清荷套装',
         proprice:'1620'
        },
        {
         Myimgurl:"../../images/c4.png",
         proname:'一卷清荷套装',
         proprice:'1620'
       },
      {
         Myimgurl:"../../images/c5.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c6.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c7.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      },
      {
         Myimgurl:"../../images/c8.png",
         proname:'一卷清荷套装',
         proprice:'1620'
      }
       ]
      }
    ],

    itemchild:[]
  },
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  gatas(){
    let itemchild=this.data.list[0].child
    this.setData({
     itemchild
    })
  },
 
  onLoad: function (options) {
        this.gatas()  
  },

 


  tabClick(e) {
    let ids = e.currentTarget.dataset.id;
    let itemchild=this.data.list[ids-1].child
    this.setData({
      id: ids,
      index: ids,
      itemchild
    })
    console.log(e)
  },


  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})