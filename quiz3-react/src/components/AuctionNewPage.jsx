import React, { Component } from "react";
import Auction from "../requests/auction";
 class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
     this.createAuction = this.createAuction.bind(this);
  }
   createAuction(event) {
    event.preventDefault();
    const { currentTarget } = event;
     const formData = new FormData(currentTarget);
     Auction.create({
      title: formData.get("title"),
      details: formData.get("details")
    }).then(data => {
      const auctionId = data.id;
       this.props.history.push(`/auctions/${auctionId}`);
    });
  }

  render() {
    return (
      <main>
        <h2>New Auction</h2>
        <form onSubmit={this.createAuction}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input name="title" id="title" />
          </div>
           <div>
            <label htmlFor="details">Body</label> <br />
            <textarea name="details" id="details" cols="60" rows="4" />
          </div>
          <div>
            <label htmlFor="reserve_price">Reserve Price</label> <br />
            <input name="reserve_price" id="peserve_price" />
          </div>
           <div>
            <input type="save" value="save" />
          </div>
        </form>
      </main>
    );
  }
}
 export default AuctionNewPage;