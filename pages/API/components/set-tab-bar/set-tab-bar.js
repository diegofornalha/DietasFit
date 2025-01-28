const defaultTabBarStyle = {
    color: '#4A4A4A',
    selectedColor: '#2E8B57',
    backgroundColor: '#F7F7F7',
}

const defaultItemName = 'APIs'

Component({
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
  },

  attached() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  detached() {
    this.removeTabBarBadge()
    this.hideTabBarRedDot()
    this.showTabBar()
    this.removeCustomStyle()
    this.removeCustomItem()
  },

  methods: {
    navigateBack() {
      this.triggerEvent('unmount')
    },

    setTabBarBadge() {
      if (this.data.hasSetTabBarBadge) {
        this.removeTabBarBadge()
        return
      }
      this.setData({
        hasSetTabBarBadge: true
      })
      wx.setTabBarBadge({
        index: 1,
        text: '1',
      })
    },

    removeTabBarBadge() {
      this.setData({
        hasSetTabBarBadge: false
      })
      wx.removeTabBarBadge({
        index: 1,
      })
    },

    showTabBarRedDot() {
      if (this.data.hasShownTabBarRedDot) {
        this.hideTabBarRedDot()
        return
      }
      this.setData({
        hasShownTabBarRedDot: true
      })
      wx.showTabBarRedDot({
        index: 1
      })
    },

    hideTabBarRedDot() {
      this.setData({
        hasShownTabBarRedDot: false
      })
      wx.hideTabBarRedDot({
        index: 1
      })
    },

    showTabBar() {
      this.setData({hasHiddenTabBar: false})
      wx.showTabBar()
    },

    hideTabBar() {
      if (this.data.hasHiddenTabBar) {
        this.showTabBar()
        return
      }
      this.setData({hasHiddenTabBar: true})
      wx.hideTabBar()
    },

    customStyle() {
      if (this.data.hasCustomedStyle) {
        this.removeCustomStyle()
        return
      }
      this.setData({hasCustomedStyle: true})
      wx.setTabBarStyle({
        color: '#fc0303',
        selectedColor: '#fc0303',
        backgroundColor: '#ffffff',
      })
    },

    removeCustomStyle() {
      this.setData({hasCustomedStyle: false})
      wx.setTabBarStyle(defaultTabBarStyle)
    },

    customItem() {
      if (this.data.hasCustomedItem) {
        this.removeCustomItem()
        return
      }
      this.setData({hasCustomedItem: true})
      wx.setTabBarItem({
        index: 1,
        text: 'API'
      })
    },

    removeCustomItem() {
      this.setData({hasCustomedItem: false})
      wx.setTabBarItem({
        index: 1,
        text: defaultItemName
      })
    }
  }
})
