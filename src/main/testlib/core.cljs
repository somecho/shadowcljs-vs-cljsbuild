(ns testlib.core
  (:require [cljs.js :as c]))

(defn ^:export myfunc
  "Prints hello world to the console"
  []
  (println "HELLO WORLD"))

(defn ^:export myadd
  "Adds two numbers together and returns the result
    `a` - number
    `b`- number
  "
  [a b]
  (+ a b))


(defn ^:export compile [source-string]
  (let [result (atom nil)]
    (c/compile-str
     (c/empty-state)
     source-string
     ""
     (fn [x] (reset! result  (if (:error x)
                               (:error x)
                               (:value x)))))
    @result))
