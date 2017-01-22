package com.rn;

import android.os.AsyncTask;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Created by zj-db0347 on 2017/1/18.
 */

public class MyHttp extends ReactContextBaseJavaModule {

    private static final String TAG = "myHttp";
    private Promise mPromise;
    private String result;

    public MyHttp(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyHttp";
    }

    @ReactMethod
    public void doRequest(String url,final Promise promise) {

        mPromise = promise;
        new RequestTask().execute(url);

    }

    private class RequestTask extends AsyncTask<String, Object,String> {

        @Override
        protected void onPreExecute() {
            Log.d(TAG, "onPreExecute invoke");
            super.onPreExecute();
        }

        @Override
        protected String doInBackground(String... params) {
            Log.d(TAG, params[0]);
            OkHttpClient client = new OkHttpClient();
            Request build = new Request.Builder().url(params[0]).build();
            try {
                Response response = client.newCall(build).execute();
                if (response != null) {
                    Log.d(TAG, "response body:" + (response.body() == null) );
                    result = response.body().string();
                } else {
                    result = "";
                }
                return result;
            } catch (Exception e) {
                e.printStackTrace();
                result = "";
                Log.d(TAG, e.getMessage());
                return e.getMessage();
            }
        }

        @Override
        protected void onPostExecute(String s) {
            Log.d(TAG, "onPostExecute invoke:" + result);
            if (result.isEmpty()){
                mPromise.reject(new Error("net::ERR_CONNECTION_TIMED_OUT"));

            } else {
                mPromise.resolve(result);
            }
           

            super.onPostExecute(s);
        }
    }
}
