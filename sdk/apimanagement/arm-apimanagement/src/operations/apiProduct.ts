/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApiProduct } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";
import {
  ProductContract,
  ApiProductListByApisNextOptionalParams,
  ApiProductListByApisOptionalParams,
  ApiProductListByApisResponse,
  ApiProductListByApisNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiProduct operations. */
export class ApiProductImpl implements ApiProduct {
  private readonly client: ApiManagementClientContext;

  /**
   * Initialize a new instance of the class ApiProduct class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all Products, which the API is part of.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByApis(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiProductListByApisOptionalParams
  ): PagedAsyncIterableIterator<ProductContract> {
    const iter = this.listByApisPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByApisPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options
        );
      }
    };
  }

  private async *listByApisPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiProductListByApisOptionalParams
  ): AsyncIterableIterator<ProductContract[]> {
    let result = await this._listByApis(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByApisNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByApisPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiProductListByApisOptionalParams
  ): AsyncIterableIterator<ProductContract> {
    for await (const page of this.listByApisPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all Products, which the API is part of.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByApis(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiProductListByApisOptionalParams
  ): Promise<ApiProductListByApisResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByApisOperationSpec
    );
  }

  /**
   * ListByApisNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByApis method.
   * @param options The options parameters.
   */
  private _listByApisNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: ApiProductListByApisNextOptionalParams
  ): Promise<ApiProductListByApisNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByApisNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByApisOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByApisNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.apiId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
