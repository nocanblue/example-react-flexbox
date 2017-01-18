package com.rn;

import android.os.AsyncTask;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zj-db0347 on 2017/1/18.
 */

public class MyHttp extends ReactContextBaseJavaModule {

    private Promise mPromise;

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
        //AsyncTask request 

    }
}
