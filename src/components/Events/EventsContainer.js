import React from "react";
import Event from "./EventsCard";
import event_data from '../../services/data.json';
import { GetEvents } from "../../services/api";
import SearchBox from "../../utilities/SearchBox";
import { ProductsContainerDiv } from "../../utilities/StyledComponents";

export default class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.inputRef = React.createRef();
    this.state = {
      events: [],
      filteredEvents: []
    };
  }

  // Fetching all events using the api HTTP Fetch request method;
  // Check the api components within services folder.
  componentDidMount() {
      GetEvents().then((events) => {
        if (events) {
          this.setState({ filteredEvents: events });
          this.setState({ events });
        } 
      }).catch(
        function(err){
          console.log(err, ' error')
        }
      )

      if ( event_data.length !== 0 ) {
        console.log(event_data);
        this.setState({ filteredEvents: event_data });
        this.setState({ events: event_data });
      }
  }

  // Filtering through event names upon user request 
  filterList = event => {
    let updateEvents = this.state.events;
    updateEvents = updateEvents.filter(events => {
      return (
        events.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredEvents: updateEvents });
  };

  render() {
    const { filteredEvents, events } = this.state;
    console.log(events);
    return (
      <React.Fragment>
        <SearchBox change={this.filterList}/>
        <div className='eventsCover'>
          <div className='eventContainerNumber'>
            <b>EVENTS</b> ({filteredEvents.length})
          </div> 
          <ProductsContainerDiv
              className="productsContainer"
            >
            <Event events={filteredEvents} />
          </ProductsContainerDiv>
        </div>
      </React.Fragment>
    );
  }
}

