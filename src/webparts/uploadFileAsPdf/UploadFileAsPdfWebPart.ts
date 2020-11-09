import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UploadFileAsPdfWebPartStrings';
import UploadFileAsPdf from './components/UploadFileAsPdf';
import { IUploadFileAsPdfProps } from './components/IUploadFileAsPdfProps';

export interface IUploadFileAsPdfWebPartProps {
  description: string;
}

export default class UploadFileAsPdfWebPart extends BaseClientSideWebPart<IUploadFileAsPdfWebPartProps> {

  public render(): void {
    const url: URL = new URL(this.context.pageContext.site.absoluteUrl);
    const siteID = `${url.hostname},${this.context.pageContext.site.id},${this.context.pageContext.web.id}`;
    const element: React.ReactElement<IUploadFileAsPdfProps> = React.createElement(
      UploadFileAsPdf,
      {
        serviceScope: this.context.serviceScope,
        siteID: siteID
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
