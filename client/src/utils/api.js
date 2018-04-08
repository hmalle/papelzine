
import axios from 'axios';

export default {
  geteprints: function(params){
    reuturn axios.get("/api/arxiv",{params:params});
  },
  getSavedeprints: function(){
    return axios.get("/api/eprints/");
  },
  deleteeprint: function(){
    return axios.delete("/api/eprints/"+id);
  },
  saveeprint: function(){
    return axios.post("/api/eprints/"+eprintData);
  },
};
