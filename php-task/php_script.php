<?php
// PHP version 7.3
// author: Vasyl Dmytruk

// checking all entered params
if (!isset($argv[1])) {
    echo 'Please add `type` and `argN` params.' . PHP_EOL;
    return;
}

if (!isset($argv[2])) {
    echo 'Please add `argN` param.' . PHP_EOL;
    return;
}

//set params
[$filename, $type, $argN] = $argv;

if ('thread' === $type) {

    for ($i = 1; $i < 6; $i++) {
        echo $i;
        sleep(60);
    }

} elseif ('MCP' === $type) {

    //search our process on machine
    exec("ps | grep '$filename thread $argN'", $commandsList);

    foreach ($commandsList as $command) {
        $neededCommand = strpos($command, "php $filename thread $argN");

        if ($neededCommand !== false) {
            echo "Command thread $argN is running!" . PHP_EOL;
            return;
        }
    }
    echo "Command thread $argN is NOT running!" . PHP_EOL;
} else {
    echo 'Please enter valid type (`thread` or `MCP`)' . PHP_EOL;
}
?>