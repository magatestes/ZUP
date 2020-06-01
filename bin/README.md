Make shure thats tests run successfully in your environment, before launch on azure devops.

- To execute with local configuration -> mvn verify or mvn verify -Ddriver.options="headless;<someotheroption>"
                                            and change com.abi.ontap.automation.integration.RunCucumberTestfeature
                                            feature path to src/test/resources/feature

- To execute on azure devops throught pipeline -> change com.abi.ontap.automation.integration.RunCucumberTestfeature
                                                    feature path to test-classes/features