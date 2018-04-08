
import axios from 'axios';

export default {
  getEprints: function(params){
    return axios.get("/api/arxiv",{params:params});
  },
  getSavedEprints: function(){
    return axios.get("/api/eprints/");
  },
  deleteEprint: function(id){
    return axios.delete("/api/eprints/"+id);
  },
  saveEprint: function(eprintData){
    return axios.post("/api/eprints/"+eprintData);
  },
};
