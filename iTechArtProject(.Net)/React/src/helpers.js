import axios from "axios";
export const sort=(items,param)=>{
  let paramA,paramB;
  return items.sort(function (a, b) {
    if(param.field=="date"){
      param.order?(paramA=a[param.field], paramB=b[param.field]):(paramB=a[param.field], paramA=b[param.field]);
      return new Date(paramA) - new Date(paramB);
    }
    else if(param.field=="name")
    {
      param.order?(paramA=a[param.field].toLowerCase(), paramB=b[param.field].toLowerCase()):(paramB=a[param.field].toLowerCase(), paramA=b[param.field].toLowerCase());
      if (paramA < paramB)
        return -1;
      if (paramA > paramB)
        return 1;
      return 0;
    }
  });
} 

export const getCookie=(name)=>{
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
export const getData=(url)=>{
  return axios.get(url)
      .then(res => {
          if(res.status==200)
              return res.data;
          return undefined;
      })
      .catch(err => {
            console.log(err);
            return undefined;
      });
}
export const deleteData=(url)=>{
  return axios.delete(url)
      .then(res => {
          if(res.status==200)
              return true;
          return false
      })
      .catch(err => {
              console.log(err);
              return false;
      });
}
export const postData=(url, data)=>{
  return axios.post(url, data)
      .then(res => {
          if(res.status==201)
              return res.data;
          return undefined;
      })
      .catch(err => {
          console.log(err);
          return undefined;
      });
}
export const putData=(url, data)=>{
  return axios.put(url, data)
      .then(res => {
          if(res.status==200)
              return true;
          return false;
      })
      .catch(err => {
          console.log(err);
          return false;
      });
}