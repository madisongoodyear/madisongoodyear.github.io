jQuery("#simulation")
  .on("click", ".s-79c25df8-77c1-4e55-8363-c417b2711a6e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-79c25df8-77c1-4e55-8363-c417b2711a6e")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3ad8a7f5-317d-491b-bd82-301f15a6d0f0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input-text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/18a29739-833f-4e0b-8dda-82af85a2e95c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Message Tapped",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d13c9f7c-08c2-4edd-86e1-b19f0ec485f0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/51045fdf-de07-4a6d-afd4-35b40a5efd30"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7e691661-d5ac-42a2-8278-1720946849d3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b7ed832-65ff-450e-936c-953b7fa303cf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a8282449-8e61-4c8a-bcca-38af16881e4f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3ad8a7f5-317d-491b-bd82-301f15a6d0f0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Contact Chosen",
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Contact Chosen"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/806c9eea-3278-4194-97db-89200f4695d9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/79c25df8-77c1-4e55-8363-c417b2711a6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b1d0fef2-6765-4970-b8a5-1f7f59ab6814"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d13c9f7c-08c2-4edd-86e1-b19f0ec485f0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_39": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_39": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "15px",
                        "height": "9px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2 .content": {
                      "attributes": {
                        "width": "15px",
                        "height": "9px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_39": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_39": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "15px",
                        "height": "9px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2 .content": {
                      "attributes": {
                        "width": "15px",
                        "height": "9px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Triangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/51045fdf-de07-4a6d-afd4-35b40a5efd30"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_48": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 7px 7px 0px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "0px"
                      },
                      "expressions": {
                        "width": "Math.max(29 - 0 - 1 - 0 - 4, 0) + 'px'",
                        "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_48": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#666666",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 7px 7px 0px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "0px",
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(29 - 0 - 1 - 0 - 4, 0) + 'px'",
                        "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_48": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 7px 7px 0px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "0px"
                      },
                      "expressions": {
                        "width": "Math.max(29 - 0 - 1 - 0 - 4, 0) + 'px'",
                        "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_48": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 7px 7px 0px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "0px",
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(29 - 0 - 1 - 0 - 4, 0) + 'px'",
                        "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_47": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_47": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#666666",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_47": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_47": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7e691661-d5ac-42a2-8278-1720946849d3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-79c25df8-77c1-4e55-8363-c417b2711a6e .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_34")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_34": {
                        "attributes": {
                          "background-color": "#666666",
                          "background-image": "none",
                          "border-top-width": "1px",
                          "border-top-style": "solid",
                          "border-top-color": "#666666",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#666666",
                          "border-left-width": "1px",
                          "border-left-style": "solid",
                          "border-left-color": "#666666",
                          "border-radius": "8px 0px 0px 8px",
                          "padding-top": "4px",
                          "padding-right": "0px",
                          "padding-bottom": "4px",
                          "padding-left": "4px"
                        },
                        "expressions": {
                          "width": "Math.max(109 - 1 - 0 - 4 - 0, 0) + 'px'",
                          "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_34": {
                        "attributes-ie": {
                          "border-top-width": "1px",
                          "border-top-style": "solid",
                          "border-top-color": "#666666",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#666666",
                          "border-left-width": "1px",
                          "border-left-style": "solid",
                          "border-left-color": "#666666",
                          "border-radius": "8px 0px 0px 8px",
                          "padding-top": "4px",
                          "padding-right": "0px",
                          "padding-bottom": "4px",
                          "padding-left": "4px",
                          "-pie-background": "#666666",
                          "-pie-poll": "false"
                        },
                        "expressions-ie": {
                          "width": "Math.max(109 - 1 - 0 - 4 - 0, 0) + 'px'",
                          "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimPause",
                    "parameter": {
                      "pause": 500
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_34": {
                        "attributes": {
                          "background-color": "#000000",
                          "background-image": "none",
                          "border-top-width": "1px",
                          "border-top-style": "solid",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#000000",
                          "border-left-width": "1px",
                          "border-left-style": "solid",
                          "border-left-color": "#000000",
                          "border-radius": "8px 0px 0px 8px",
                          "padding-top": "4px",
                          "padding-right": "0px",
                          "padding-bottom": "4px",
                          "padding-left": "4px"
                        },
                        "expressions": {
                          "width": "Math.max(109 - 1 - 0 - 4 - 0, 0) + 'px'",
                          "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Label_34": {
                        "attributes-ie": {
                          "border-top-width": "1px",
                          "border-top-style": "solid",
                          "border-top-color": "#000000",
                          "border-right-width": "0px",
                          "border-right-style": "none",
                          "border-right-color": "#000000",
                          "border-bottom-width": "1px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#000000",
                          "border-left-width": "1px",
                          "border-left-style": "solid",
                          "border-left-color": "#000000",
                          "border-radius": "8px 0px 0px 8px",
                          "padding-top": "4px",
                          "padding-right": "0px",
                          "padding-bottom": "4px",
                          "padding-left": "4px",
                          "-pie-background": "#000000",
                          "-pie-poll": "false"
                        },
                        "expressions-ie": {
                          "width": "Math.max(109 - 1 - 0 - 4 - 0, 0) + 'px'",
                          "height": "Math.max(32 - 1 - 1 - 4 - 4, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keyup.jim", ".s-79c25df8-77c1-4e55-8363-c417b2711a6e .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input-text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Input-text"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("focusin", ".s-79c25df8-77c1-4e55-8363-c417b2711a6e .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input-text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input-text",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-79c25df8-77c1-4e55-8363-c417b2711a6e .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Contact Chosen"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-79c25df8-77c1-4e55-8363-c417b2711a6e #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });