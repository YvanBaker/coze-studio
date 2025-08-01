// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameWorkflowExecution = "workflow_execution"

// WorkflowExecution Workflow Execution Record Table, used to record the status of each workflow execution
type WorkflowExecution struct {
	ID              int64  `gorm:"column:id;primaryKey;comment:execute id" json:"id"`                                                                      // execute id
	WorkflowID      int64  `gorm:"column:workflow_id;not null;comment:workflow_id" json:"workflow_id"`                                                     // workflow_id
	Version         string `gorm:"column:version;comment:workflow version. empty if is draft" json:"version"`                                              // workflow version. empty if is draft
	SpaceID         int64  `gorm:"column:space_id;not null;comment:the space id the workflow belongs to" json:"space_id"`                                  // the space id the workflow belongs to
	Mode            int32  `gorm:"column:mode;not null;comment:the execution mode: 1. debug run 2. release run 3. node debug" json:"mode"`                 // the execution mode: 1. debug run 2. release run 3. node debug
	OperatorID      int64  `gorm:"column:operator_id;not null;comment:the user id that runs this workflow" json:"operator_id"`                             // the user id that runs this workflow
	ConnectorID     int64  `gorm:"column:connector_id;comment:the connector on which this execution happened" json:"connector_id"`                         // the connector on which this execution happened
	ConnectorUID    string `gorm:"column:connector_uid;comment:user id of the connector" json:"connector_uid"`                                             // user id of the connector
	CreatedAt       int64  `gorm:"column:created_at;not null;autoCreateTime:milli;comment:create time in millisecond" json:"created_at"`                   // create time in millisecond
	LogID           string `gorm:"column:log_id;comment:log id" json:"log_id"`                                                                             // log id
	Status          int32  `gorm:"column:status;comment:1=running 2=success 3=fail 4=interrupted" json:"status"`                                           // 1=running 2=success 3=fail 4=interrupted
	Duration        int64  `gorm:"column:duration;comment:execution duration in millisecond" json:"duration"`                                              // execution duration in millisecond
	Input           string `gorm:"column:input;comment:actual input of this execution" json:"input"`                                                       // actual input of this execution
	Output          string `gorm:"column:output;comment:the actual output of this execution" json:"output"`                                                // the actual output of this execution
	ErrorCode       string `gorm:"column:error_code;comment:error code if any" json:"error_code"`                                                          // error code if any
	FailReason      string `gorm:"column:fail_reason;comment:the reason for failure" json:"fail_reason"`                                                   // the reason for failure
	InputTokens     int64  `gorm:"column:input_tokens;comment:number of input tokens" json:"input_tokens"`                                                 // number of input tokens
	OutputTokens    int64  `gorm:"column:output_tokens;comment:number of output tokens" json:"output_tokens"`                                              // number of output tokens
	UpdatedAt       int64  `gorm:"column:updated_at;autoUpdateTime:milli;comment:update time in millisecond" json:"updated_at"`                            // update time in millisecond
	RootExecutionID int64  `gorm:"column:root_execution_id;comment:the top level execution id. Null if this is the root" json:"root_execution_id"`         // the top level execution id. Null if this is the root
	ParentNodeID    string `gorm:"column:parent_node_id;comment:the node key for the sub_workflow node that executes this workflow" json:"parent_node_id"` // the node key for the sub_workflow node that executes this workflow
	AppID           int64  `gorm:"column:app_id;comment:app id this workflow execution belongs to" json:"app_id"`                                          // app id this workflow execution belongs to
	NodeCount       int32  `gorm:"column:node_count;comment:the total node count of the workflow" json:"node_count"`                                       // the total node count of the workflow
	ResumeEventID   int64  `gorm:"column:resume_event_id;comment:the current event ID which is resuming" json:"resume_event_id"`                           // the current event ID which is resuming
	AgentID         int64  `gorm:"column:agent_id;comment:the agent that this execution binds to" json:"agent_id"`                                         // the agent that this execution binds to
	SyncPattern     int32  `gorm:"column:sync_pattern;comment:the sync pattern 1. sync 2. async 3. stream" json:"sync_pattern"`                            // the sync pattern 1. sync 2. async 3. stream
	CommitID        string `gorm:"column:commit_id;comment:draft commit id this execution belongs to" json:"commit_id"`                                    // draft commit id this execution belongs to
}

// TableName WorkflowExecution's table name
func (*WorkflowExecution) TableName() string {
	return TableNameWorkflowExecution
}
