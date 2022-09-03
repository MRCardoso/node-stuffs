# Run a single node server with clustering

## To run a benchmark and test performance use Apache Benchmark
> **Warning**
> in ubuntu distribution, you probably need to install it first
```
$ apt-get update -y && apt-get install apache2-utils -y
```

## Execute the node server with cluster equal the cores size
```
$ npm run health
```
In Another terminal window run benchmark
```
$ npm run benchmark
```

### Output
```
Processing:   547 1776 765.3   1875    2794
Waiting:      542 1775 765.9   1875    2793
Total:        547 1777 765.1   1876    2794

Percentage of the requests served within a certain time (ms)
  50%   1876
  66%   1926
  75%   2716
  80%   2733
  90%   2755
  95%   2779
  98%   2794
  99%   2794
 100%   2794 (longest request)
```

## Execute the node server with cluster equal the cores size * 3
```
$ npm run stress
```
In Another terminal window run benchmark
```
$ npm run benchmark
```

### Output
```
Processing:   534 2763 479.8   2887    2920
Waiting:      532 2763 479.9   2887    2919
Total:        534 2764 479.9   2887    2920

Percentage of the requests served within a certain time (ms)
  50%   2887
  66%   2905
  75%   2911
  80%   2911
  90%   2918
  95%   2920
  98%   2920
  99%   2920
 100%   2920 (longest request)
```