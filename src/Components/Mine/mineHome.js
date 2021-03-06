import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./index.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

class MineHome extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}
	render(){
		return(
			<div>
				<div className={css.head}>
					<div className={css.noLogin}>
						<img className={css.noLoginImg} src="http://m.gjw.com/images/icon_head_no_login.png"/>
						<div className={css.noLoginDiv}><NavLink className={css.bianse} to="/mine/login">登录注册</NavLink></div>
					</div>
				</div>
				<div className={css.yi}>
					<div className={css.yilou}>
						<p className={css.sP}>我的订单</p>
						<p className={css.you}>查看全部订单<NavLink to="/mine/userCenter">></NavLink></p>
					</div>
					<ul className={css.order}>
						<li className={css.orderLi}>
							<div>
								<img className={css.orderImg} src="http://m.gjw.com/images/wd_01dfk.png"/>
								<div className={css.daifukuan}></div>
							</div>
							<p className={css.sP}><NavLink to="/mine/userFukuan">待付款</NavLink></p>
						</li>
						<li className={css.orderLi}>
							<div>
								<img className={css.orderImg} src="http://m.gjw.com/images/wd_02dfh.png"/>
								<div className={css.daifahuo}></div>
							</div>
							<p className={css.sP}><NavLink to="/mine/userFahuo">待发货</NavLink></p>
						</li>
						<li className={css.orderLi}>
							<div>
								<img className={css.orderImg} src="http://m.gjw.com/images/wd_03dsh.png"/>
								<div className={css.daishouhuo}></div>
							</div>
							<p className={css.sP}><NavLink to="/mine/userShouhuo">待收货</NavLink></p>
						</li>
						<li className={css.orderLi}>
							<div>
								<img className={css.orderImg} src="http://m.gjw.com/images/wd_04dpj.png"/>
							</div>
							<p className={css.sP}><NavLink to="/mine/userPingjia">待评价</NavLink></p>
						</li>
					</ul>
				</div>
				<div className={css.er}>
					<div className={css.erlou}>
						<p className={css.sP}>我的钱包</p>
						<p className={css.you}>查看明细<NavLink to="/mine/myAsset">></NavLink></p>
					</div>
					<ul className={css.wallet}>
						<li className={css.walletLi}>
							<p className={css.yue}>0</p>
							<p className={css.sP}><NavLink to="/mine/assetYue">账户余额</NavLink></p>
						</li>
						<li className={css.walletLi}>
							<p className={css.youhui}>0</p>
							<p className={css.sP}><NavLink to="/mine/assetYouhui">优惠券</NavLink></p>
						</li>
						<li className={css.walletLi}>
							<p className={css.jifen}>0</p>
							<p className={css.sP}><NavLink to="/mine/assetJifen">积分</NavLink></p>
						</li>
					</ul>
				</div>
				<div className={css.san}>
					<ul className={css.infos}>
						<li className={css.infosLi}>
							<div>
								<img className={css.infosImg} src="http://m.gjw.com/images/icon_collection.png"/>
							</div>
							<p className={css.sP}><NavLink to="/mine/userFav">商品收藏</NavLink></p>
						</li>
						<li className={css.infosLi}>
							<div>
								<img className={css.infosImg} src="http://m.gjw.com/images/icon_foot_print.png"/>
							</div>
							<p className={css.sP}><NavLink to="/mine/userFoot">浏览足迹</NavLink></p>
						</li>
						<li className={css.infosLi}>
							<div>
								<img className={css.infosImg} src="http://m.gjw.com/images/kfrx.png"/>
							</div>
							<p className={css.sPKf}>400-722-1919</p>
						</li>
						<li className={css.infosLi}>
							<div>
								<img className={css.infosImg} src="http://m.gjw.com/images/bag.png"/>
							</div>
							<p className={css.sP}><NavLink to="/minisite">领优惠券</NavLink></p>
						</li>
					</ul>
				</div>
				<div className={css.si}>
					<b className={css.B}>推荐商品</b>
					<div className={css.line}></div>
				</div>
				<div className={css.wu}>
					<div className="swiper-container">
					    <div className="swiper-wrapper">
						       {
						       	this.props.mineList.map(item=>
						        	<div key={item.ID}  className="swiper-slide">
						        		<img className={css.suo} src={'http://img0.gjw.com/product/'+item.Pic}/>
						        	</div>
						        )
						       }
					    </div>
					    <div className="swiper-scrollbar"></div>
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		if(this.props.mineList.length===0){
			this.props.getMineList();
		}
	}
	componentDidMount(){
		var swiper = new Swiper('.swiper-container', {
		     slidesPerView: 3,
		     spaceBetween: 30,
		     freeMode: true,
		     pagination: {
		       el: '.swiper-pagination',
		       clickable: true,
		     },
		});
		this.props.showTrue()
	}
	componentDidUpdate(){
		var swiper = new Swiper('.swiper-container', {
		     slidesPerView: 3,
		     spaceBetween: 30,
		     freeMode: true,
		     pagination: {
		       el: '.swiper-pagination',
		       clickable: true,
		     },
		});
	}
	componentWillUnmount(){
		this.props.hideFalse();
	}
}

export default connect((state)=>{
	return{
		mineList:state.mineList
	}
},action)(MineHome)