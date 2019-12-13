<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
		<Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

		<DropdownTransition>
			<div class="m-nav" v-show="isMNav">
				<NavLinks />
			</div>
		</DropdownTransition>

    <Content class="theme-default-content custom" />

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
export default {
  name: 'NoSideBarLayout',
	components: { NavLink, Navbar, NavLinks, DropdownTransition },
	data () {
		return {
			isMNav: false
		}
	},
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
		},
		shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
		}
	},
	methods: {
		toggleSidebar () {
			this.isMNav = !this.isMNav
		}
	}
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
	.m-nav
		display none
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
		.m-nav
			display block
			background-color $themeGrayColor
			border-bottom 1px solid $borderColor
			margin 0 -1.5rem
			transition: height 0.1s ease-out;
			overflow hidden
			ul
				list-style-type none
			.nav-links
				padding 0.5rem 0 0.75rem 0
				a
					font-weight 600
				.nav-item, .repo-link
					display block
					line-height 1.25rem
					font-size 1.1em
					padding 0.5rem 0 0.5rem 1.5rem
				.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
					top calc(1rem - 2px)
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>