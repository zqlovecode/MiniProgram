// pages/decrip/decrip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     gd_intro:[
            {
              gd_id:11,
              gd_name:"茶知道星云琉璃杯主人杯单杯小品茗杯单个冰冻烧杯子主人功夫茶杯茶知道星云琉璃杯主人杯单杯小品茗杯单个冰冻烧杯子主人功夫茶杯",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            },

            {
              gd_id:12,
              gd_name:"茶知道星云琉璃杯主人杯单杯小品茗杯单个冰冻烧杯子主人功夫茶杯",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            },

            {
              gd_id:13,
              gd_name:"茶知道星云琉璃杯主人杯单",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            },
            {
              gd_id:14,
              gd_name:"茶知道星云琉璃杯主人杯单",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            },
            {
              gd_id:15,
              gd_name:"茶知道星云琉璃杯主人杯单",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            },
            {
              gd_id:16,
              gd_name:"茶知道星云琉璃杯主人杯单",
              gd_price:360 ,
              pics:[
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                },
                {
                  picurl: "/images/a1.png",
                }
               ], 
            }
           
       ],
    
      getdata:[],
      getname:'',
      getprice:''
  },

  /**
   * 生命周期函数--监听页面加载
   */

   getdatas(e){
     var id =e.cid
     var getdata=this.data.gd_intro[id-11].pics;
     var getname=this.data.gd_intro[id-11].gd_name;
     var getprice=this.data.gd_intro[id-11].gd_price;
     this.setData({
        getdata,
        getname,
        getprice
     })
     console.log(e);
   },


  onLoad: function (options) {
        this.getdatas(options);

        
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