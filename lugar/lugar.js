const axios=require('axios');

const getLugarLatLng=async(dir)=>{
	const encodedUlr=encodeURI(dir);
	
	const instance = axios . create ( {   
  		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}` , 
  		headers: { 'x-rapidapi-key' : 'e6bac48b6fmsh594c0b0714ee4d7p1baa37jsnd37f19cc9595' }  
	  } ) ;
	const resp=await instance.get();
	if(resp.data.Results.length===0){
		throw new Error(`No hay resultados para ${dir}`);

	}
	const  data=resp.data.Results[0];
	const direccion=data.name;
	const lat=data.lat;
	const lng=data.lon;
	return{
		direccion,
		lat,
		lng
	}

}

module.exports={
	getLugarLatLng
}
