#!/bin/bash

mongo <<EOF
var config = {
    "_id": "rs0",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongodb:27017"
        }
    ]
};
rs.initiate(config, { force: true });
rs.status();
EOF
