import common from "../../utils/public.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'https://ku.qingnian8.com/school/list.php',
      data:{
        num:5,
        page:2
      },
      success:res=>{
        // res.data.forEach(item=>{
        //   var time=item.posttime*1000;
        //   var d=new Date(time);
        //   var year=d.getFullYear();
        //   var month=d.getMonth()+1<10? "0"+(d.getMonth()+1):d.getMonth()+1;
        //   var day=d.getDate()<10? "0"+d.getDate():d.getDate();
        //   var posttime=year+"-"+month+"-"+day;
        // })

        // res.data.forEach(item=>{
        //   var title=item.title
        //   if(title.lenth>10){
        //     item.title=title.substr(0,10)+"..."
        //   }
        // })
       res.data.forEach(item=>{
         item.posttime=common.getMyData(item.posttime,"Y-m-d")
         item.title=common.getStrlen
       })


        this.setData({
          DataList:res.data
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
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