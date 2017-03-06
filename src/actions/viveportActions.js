import 'whatwg-fetch';

import {
  GET_VIVEPORT_INITIATE,
  GET_VIVEPORT_SUCCESS,
  GET_VIVEPORT_FAIL,
  CHANGE_ACCOUNT_ID,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

let header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
	'Authkey': 'lr34wbqzkLNup2TjvEsxO837qyJ+dyTX+1a9D7NKf3+CTxGyqPqTURTBMxznPvpxgv6Gv8e1i4Asr5henVLQYvh1Em3h6QBDoHht8cNLBI0y0yK4y67hTcHBCap/uFjMygmN+dfT9XPFQZstGSD6CClTPTlXLxgMOhfdf94LNKcMV1Vf15L9/pl6TowqH1MheDJUIqPDMTFRi6imVYaIp2gzBiTcUHDOnhGa+KdA3mZne8VLQkAW1O18RoO44rcgF1hW+RJTvnJjhkbRJwBHuULnxIaTieUFwQrDeS6FJhSXKTxK1uZZs48CcHcsgN89U42IVeTom07MCJGA+bHUj36ruo6xGHA1m2fONIzQ8g+7YjBL13hKASy9QNozp8SM//JdBh5y1XVS+7ZifVjMsEx/V5NL4Xps6k1PcpOsJLTXpurbmxJB2HoR5Z70CSclZjxSZcvLGkDSObNixMzgoKWB5ElpdZ6DmlLg1+brd9xvzg+TtplHosXir0UWCq7gH91+NlVd4l2WOiF0Urtco7Ooa0pVDHWcWQiaifv3zR8='
});
//let opt = Object.assign({}, defaultOptions, options); //将默认的参数和传过来的合并在一起
var sentData={
    //method:opt.method,
    mode: 'cors',
    header: header,
};

export const getViveport = (accountId = 'a009c2f7-1031-4cd7-9d30-cb0209cfcbfa') => (
  (dispatch) => {
    dispatch({ type: GET_VIVEPORT_INITIATE });
    dispatch(showSpinner());
    fetch(`https://contentstore-global.htcvive.com/api/cntysettings/v1/find/${accountId}`)
      .then(response => response.json() )
      .then((json) => {
        dispatch({ type: GET_VIVEPORT_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch(() => { 
	  dispatch({ type: GET_VIVEPORT_FAIL }) });
  }
);

export const changeAccountId = text => ({ type: CHANGE_ACCOUNT_ID, payload: { accountId: text } });
