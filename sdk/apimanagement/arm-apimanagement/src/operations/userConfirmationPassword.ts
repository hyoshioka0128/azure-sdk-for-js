/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { UserConfirmationPassword } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";
import { UserConfirmationPasswordSendOptionalParams } from "../models";

/** Class containing UserConfirmationPassword operations. */
export class UserConfirmationPasswordImpl implements UserConfirmationPassword {
  private readonly client: ApiManagementClientContext;

  /**
   * Initialize a new instance of the class UserConfirmationPassword class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Sends confirmation
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  send(
    resourceGroupName: string,
    serviceName: string,
    userId: string,
    options?: UserConfirmationPasswordSendOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, userId, options },
      sendOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const sendOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/users/{userId}/confirmations/password/send",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.appType],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.userId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
