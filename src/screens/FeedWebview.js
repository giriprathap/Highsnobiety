import React from 'react';
import { WebView } from 'react-native-webview';
const FeedWebview = ({route}) => {
    const { slug } = route.params;

    return(
        <WebView source = {{ uri:`https://www.highsnobiety.com/p/${slug}` }} />
    );
}

export default FeedWebview;