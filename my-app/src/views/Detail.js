import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                详情页
                {this.props.match.params.id}
                <button onClick={()=>{
                    // 返回上一页
                    // this.props.history.goBack();
                    this.props.history.go(-1);

                }}>返回</button>
            </div>
        )
    }
}
