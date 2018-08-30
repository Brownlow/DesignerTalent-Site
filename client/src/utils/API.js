import axios from "axios";

export default {

   //  =====================      Designer API       =====================

  saveDesigner: function(designer) {
    return axios.post("/api/designers", designer)
      .then(function(response){
        return response;
     })
  },

  // Get Designer from DB
  getDesigner: function(id) {
    console.log(id)
    return axios.get("/api/designers/" + id)
    .then(function(response){
      return response;
    })
  },
  // Get All Designers from DB
  getDesigners: function() {
    return axios.get("/api/designers")
    .then(function(response){
      return response;
    })
  },
  // Remove Designer from DB
  
  // Update Designer
  updateDesigner: function(id, changes) {
    return axios.put("/api/designers/" + id, changes)
      .then(function(response){
        console.log(changes)
        return response;
    })
  },


  //  =====================      Recruiter API       =====================

  // Create New Recruiter in DB

  saveRecruiter: function(recruiter) {
    return axios.post("/api/recruiters", recruiter)
      .then(function(response){
        return response;
     })
  },


  // Get Recruiter from DB
  // Remove Recruiter from DB
  // Update Recruiter in DB


  //  =====================      Companies API       =====================

  // Add New Company to DB

  saveCompany: function(company) {
    console.log(company)
    return axios.post("/api/companies", company)
      .then(function(response){
        return response;
     })
  },

  // Get Company from DB
  // Remove Company from DB
  // Update Company in DB



  //  =====================      Jobs API       =====================

  // Create New Job in DB
  saveJob: function(job) {
    console.log(job)
    return axios.post("/api/jobs", job)
      .then(function(response){
        return response;
     })
  },

  // Get Job/s from DB
  getJobs: function(id) {
    return axios.get("/api/jobs")
    .then(function(response){
      return response;
    })
  },
  // Get Designer from DB
  getJob: function(id) {
    console.log(id)
    return axios.get("/api/job/" + id)
    .then(function(response){
      return response;
    })
  },

  // Update Designer
  updateJob: function(id, changes) {
    console.log(id, changes)
    return axios.put("/api/jobs/" + id, changes)
      .then(function(response){
        console.log(changes)
        return response;
    })
  },


  

  // Remove job from DB
  // Remove jobs from DB
  // Update Job 

  // Update Requests for 



  
  
  //Ads Bills to DB
  logBills: function(bill) {
    return axios.post("/api/bills", bill)
    .then(function(response){
    })
  },
  // Get Bills from DB
  pullBills: function(bills) {
    return axios.get("/api/bills")
    .then(function(response){
      return response;
    })
  },
  // Check DB if Bill already exists
  checkBill: function(id) {
    return axios.get("/api/bills/" + id)
    .then(function(response){
      return response;
    })
  },
  // Delete a Bill
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Get Bills from ProPublica API
  getBills: function() {
    return (axios.get("https://api.propublica.org/congress/v1/115/house/bills/active.json", {headers: {"X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU"}})
    .then(function(bills) {
      return bills
    }))
  },
  // searchBills: function(keyword) {
  //   return (axios.get("https://api.propublica.org/congress/v1/bills/search.json?query="+ keyword, { headers: { "X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU" }})
  //     .then(function (bills) {
  //       return bills
  //     }))
  // },
  
  voteYes: function(id, bill) {
    return axios.put("/api/bills/yes/" + id, bill)
  },

  voteNo: function(id, bill) {
    return axios.put("/api/bills/no/" + id, bill)
  },

  voteUnde: function(id, bill) {
    return axios.put("/api/bills/unde/" + id, bill)
  },

  saveUser: function(user) {
    return axios.post("/api/user", user)
      .then(function(response){
     })
  },

  getUser: function(id) {
    return axios.get("/api/user/" + id)
    .then(function(response){
      return response;
    })
  },

  updateUser: function(id, changes) {
    return axios.get("/api/user/" + id, changes)
      .then(function(response){
        return response;
    })
  }
}
  // }

  // }

  // searchBills: function(keyword) {
  //   return (axios.get("https://api.propublica.org/congress/v1/bills/search.json?query="+ keyword, { headers: { "X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU" }})
  //     .then(function (bills) {
  //       return bills
  //     }))
    

