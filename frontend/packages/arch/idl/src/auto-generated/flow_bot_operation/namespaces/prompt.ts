/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as agw_common from './agw_common';

export type Int64 = string | number;

export enum FrontedTagType {
  /** 文本 */
  TEXT = 0,
  /** 时间，用时间戳，单位是毫秒 */
  TIME = 1,
  /** 时间间隔，单位是毫秒 */
  TIME_DURATION = 2,
}

export enum InputOutputType {
  /** 文本类型 */
  TEXT = 0,
}

export enum TagType {
  STRING = 0,
  DOUBLE = 1,
  BOOL = 2,
  LONG = 3,
  BYTES = 4,
}

export interface ChannelInfo {
  name: string;
  conn_id: string;
  channel: string;
}

export interface FetchMsgListRequest {
  start_at?: Int64;
  end_at?: Int64;
  log_id?: string;
  user_id?: string;
  bot_id?: string;
  conn_id?: string;
  channel?: string;
  message_id?: string;
  limit?: number;
  offset?: number;
  conversation_id?: string;
  desc_by_start_time?: boolean;
  agw_common_param?: agw_common.AgwCommonParam;
}

export interface FetchMsgListResponse {
  data?: ListSpans;
  code: Int64;
  msg: string;
}

export interface FrontendTag {
  key: string;
  /** 多语，如无配置时值沿用 key */
  key_alias?: string;
  tag_type: TagType;
  value?: Value;
  /** 前端类型，用于前端处理 */
  frontend_tag_type?: FrontedTagType;
  /** 是否可复制 */
  can_copy?: boolean;
}

export interface GetChannelRequest {}

export interface GetChannelResponse {
  data?: Array<ChannelInfo>;
  code: Int64;
  msg: string;
}

export interface GetTraceSDKRequest {
  trace_id?: string;
  log_id?: string;
  agw_common_param?: agw_common.AgwCommonParam;
}

export interface GetTraceSDKResponse {
  data?: TraceFrontend;
  code: Int64;
  msg: string;
}

export interface ListSpans {
  spans?: Array<Span>;
  total?: Int64;
}

export interface Span {
  trace_id?: string;
  log_id?: string;
  psm?: string;
  dc?: string;
  pod_name?: string;
  span_id?: string;
  type?: string;
  name?: string;
  parent_id?: string;
  /** 单位是毫秒 */
  duration?: Int64;
  /** 单位是毫秒 */
  start_time?: Int64;
  status_code?: number;
  tags?: Array<Tag>;
}

export interface SpanInputOutput {
  /** TEXT */
  type?: InputOutputType;
  content?: string;
}

export interface SpanSummary {
  tags?: Array<FrontendTag>;
}

/** Tag */
export interface Tag {
  key?: string;
  tag_type?: TagType;
  value?: Value;
}

export interface TraceFrontend {
  spans?: Array<TraceFrontendSpan>;
  header?: TraceHeader;
}

export interface TraceFrontendSpan {
  trace_id?: string;
  log_id?: string;
  span_id?: string;
  type?: string;
  name?: string;
  alias_name?: string;
  parent_id?: string;
  /** 单位是毫秒 */
  duration?: Int64;
  /** 单位是毫秒 */
  start_time?: Int64;
  status_code?: number;
  tags?: Array<Tag>;
  /** 节点详情 */
  summary?: SpanSummary;
  input?: SpanInputOutput;
  output?: SpanInputOutput;
  is_entry?: boolean;
  product_line?: string;
  is_key_span?: boolean;
  owner_list?: Array<string>;
  rundown_doc_url?: string;
}

export interface TraceHeader {
  /** 单位是毫秒 */
  duration?: Int64;
  /** 输入消耗token数 */
  tokens?: number;
  status_code?: number;
  tags?: Array<FrontendTag>;
  message_id?: string;
  start_time?: Int64;
}

export interface Value {
  v_str?: string;
  v_double?: number;
  v_bool?: boolean;
  v_long?: Int64;
  v_bytes?: Blob;
}
/* eslint-enable */
