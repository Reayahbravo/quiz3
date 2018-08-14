import React, { Component } from "react";
import AuctionDetails from "./AuctionDetails";
// import BidDetails from "./BidDetails";
import BidList from "./BidList";
import Auction from "../requests/auction";

class AuctionShowPage extends Component {
  constructor(props) {

    super(props);
     this.state = {
      loading: true,
      auction: undefined
    };

    this.deleteAuction = this.deleteAuction.bind(this);
    this.deleteBid = this.deleteBid.bind(this);
    }

    componentDidMount() {
      const auctionId = this.props.match.params.id;
      Auction.one(auctionId)
 
        .then(auction => {
          console.log(auction);
           this.setState({ loading: false, auction: auction });
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    }
  
    deleteAuction() {
      this.setState({
      auction: undefined
      });
    }

    deleteBid(id) {
      const { auction } = this.state;
      const { bids = [] } = auction;
       this.setState({
        auction: {
          ...auction,
          bids: bids.filter(bid => bid.id !== id)
        }
      });
    }

    render() {
      const { loading, auction } = this.state;

      if (loading) {
        return (
          <main>
            <h2>Loading...</h2>
          </main>
        );
      }

      if (!auction) {
        return (
          <main>
            <h2>This Auction doesn't exist</h2>
          </main>
        );
      }

    return (
      <main>
        <AuctionDetails {...auction} />
        <button onClick={this.deleteAuction}>Delete</button>

        <h2>Bids</h2>
        <BidList onBidDeleteClick={this.deleteBid} bids={auction.bids} />
      </main>
    );
  }
}
 export default AuctionShowPage;