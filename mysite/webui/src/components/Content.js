import React from 'react';
import Section from './Section.js';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filters:this.props.filters};
    }

    //Render does not like for loops so we are creating sections. 
    //filtering the correct partners for each type and then rendering the section
    createSections(event){
        var keysSorted;
        var categories = this.props.data.partnerDetails.categories;
        //we will need to think of something for filters. Make shift for now
        //since contants are set initially in App.js we don't need to import data.js
        if(this.props.filters.indexOf(window.App.stringConstants.alphabetically)!==-1)
        {
            keysSorted  = Object.keys(categories).sort(function(a,b)
            {
                return (categories[a] < categories[b]) ? -1 : (categories[a] > categories[b]) ? 1 : 0;
            });
        }
        else
        {
            keysSorted = Object.keys(categories);
        }
        let sections = []
        //filtering data based on type
        for (let i = 0; i < parseInt(this.props.data.partnerDetails.sections,10); i++) {
            var filtered = [];
            for (let j = 1; j <= parseInt(this.props.data.partnerDetails.partnerCount,10); j++) {
                if (parseInt(this.props.data.partnerDetails.partners[j].type,10) === parseInt(keysSorted[i],10)) {
                    let partnersDetails = {"id":this.props.data.partnerDetails.partners[j].id,
                                            "name":this.props.data.partnerDetails.partners[j].name};
                    filtered.push(partnersDetails);
                }
            }
            let sectionId = 'section-'+keysSorted[i];
            //creating the sections for different types of partners
            sections.push(<Section state = {this.props.state} key={this.props.data.partnerDetails.categories[keysSorted[i]]} id={sectionId} data={filtered} type={this.props.data.partnerDetails.categories[keysSorted[i]]}/>);
        }
        return sections;
    }
    render() {
      return (
        <div>
            {this.createSections()}
        </div>
      );
    }
  }