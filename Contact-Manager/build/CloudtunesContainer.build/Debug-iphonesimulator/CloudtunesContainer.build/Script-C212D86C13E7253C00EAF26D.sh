#!/bin/bash

								if [ ! -d "$PROJECT_DIR/www" ] ; then
									cp -R /Users/Shared/PhoneGap/Frameworks/PhoneGap.framework/www "$PROJECT_DIR"
								fi
								# detect www folder reference in project, if missing, print warning
								grep "{isa = PBXFileReference; lastKnownFileType = folder; path = www; sourceTree = \"<group>\"; };" "$PROJECT_DIR/$PROJECT_NAME.xcodeproj/project.pbxproj"
								rc=$? 
								if [ $rc != 0 ] ; then
								echo -e "warning: Missing - Add $PROJECT_DIR/www as a folder reference in your project. Just drag and drop the folder into your project, in Xcode 4." 1>&2
								fi							
